export const name="file-arrow-up-thin";
export const id="dl_a163d4921c07456e9274";
export const url=new URL("../icons/file-arrow-up-thin.svg?v=4ca4983435a654ae9ecb829ecdf351388a0dd81a73ad16d23a89847b8b032567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
