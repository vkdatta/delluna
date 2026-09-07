export const name="number-four-duotone";
export const id="dl_9658a03c5458418c8bb7";
export const url=new URL("../icons/number-four-duotone.svg?v=d6b59f1df93665be352ae704eb8c4e7dbe5952eb9d52a98b0e741039b447e804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
