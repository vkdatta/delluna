export const name="letter-circle-v-bold";
export const id="dl_e1e6e00c472e4a7b9604";
export const url=new URL("../icons/letter-circle-v-bold.svg?v=61b753c38959e38c2b86b2be4f8f8c44a08340916154838f4a37bc0aaf311e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
