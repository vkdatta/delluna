export const name="venus";
export const id="dl_a5f5f6f474f848e2b465";
export const url=new URL("../icons/venus.svg?v=5b76a891ad0483818325d529ff391f9e632711cd1271ee70ab2deadea33cd7a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
