export const name="lucid_1-arrow-left-to-line";
export const id="dl_bd3995c1cefc4046a7de";
export const url=new URL("../icons/lucid_1-arrow-left-to-line.svg?v=06f49446594ef3bdb83cf1b8024251ff1a8c04823ce9bbc53961f38fa0285228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
