export const name="media_output";
export const id="dl_5fa96f08e3cbc13da9a6";
export const url=new URL("../icons/media_output.svg?v=0dd747a688d94346a2c34b873bbe0eb25affabce41df6a3e02bc458fecf174ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
