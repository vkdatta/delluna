export const name="metronome-thin";
export const id="dl_2e7b9d69fbec45818e0b";
export const url=new URL("../icons/metronome-thin.svg?v=769dff052b5570d4067a505de4581b5a79deec484687ea477a9dceb33d201206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
