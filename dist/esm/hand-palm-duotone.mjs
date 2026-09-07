export const name="hand-palm-duotone";
export const id="dl_7374308e592e4869995c";
export const url=new URL("../icons/hand-palm-duotone.svg?v=d67e1abb39d8cefcddb82e5a6786852076ef7f8dbb9adf91db634a55ed009e80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
