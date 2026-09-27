export const name="align-bottom-duotone";
export const id="dl_1eabd59c57984e31b579";
export const url=new URL("../icons/align-bottom-duotone.svg?v=90e480fd42501202fbdd8140452c77712b4c4bc7a868b731fdabc47f01c232d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
