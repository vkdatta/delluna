export const name="transition_fade-fill";
export const id="dl_56e8a504b58c42bea566";
export const url=new URL("../icons/transition_fade-fill.svg?v=767f1593d3038daaed8bf617e02a69dac910b26bc4df5d56d93fb311f300d78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
