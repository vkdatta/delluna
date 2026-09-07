export const name="copy-bold";
export const id="dl_3166dabb25414b8c805c";
export const url=new URL("../icons/copy-bold.svg?v=204e84365593c418c71d9ce0674be3dd3e5ff13d0dc13e1f728249ef9571bf9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
