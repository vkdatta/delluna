export const name="not-equals-thin";
export const id="dl_95f63ffc6d6c4a11bb81";
export const url=new URL("../icons/not-equals-thin.svg?v=86f071aaff6ec831660b93460dd340e937961927ba5c31884fe79b96b059efcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
