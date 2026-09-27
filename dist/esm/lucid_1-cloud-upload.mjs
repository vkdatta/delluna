export const name="lucid_1-cloud-upload";
export const id="dl_9616fa44a5bc424e8487";
export const url=new URL("../icons/lucid_1-cloud-upload.svg?v=00df8bb3ee00716192161bde6b24e161dd0642a0cec3b4b08c0cd0aa150415d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
