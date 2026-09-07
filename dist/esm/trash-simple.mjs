export const name="trash-simple";
export const id="dl_96108c182a3248deb024";
export const url=new URL("../icons/T/trash-simple.svg?v=4bba1f6bd6a5b969a1ddca0bddfd5a68764b29c7c7b9600251e96f551ade1171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
