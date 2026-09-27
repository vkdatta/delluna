export const name="notebook-thin";
export const id="dl_acac62fe5c1747a9b2f9";
export const url=new URL("../icons/notebook-thin.svg?v=ea26e38c55691c883e6d78f951676089953181be05c93a26f08da46592953980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
