export const name="lucid_3-octagon-x";
export const id="dl_970e7561ec024b5faac7";
export const url=new URL("../icons/lucid_3-octagon-x.svg?v=9c912d714f93e1827bf1bf84a558fd9a8e219f8e2d1093c8e2fa72076f5b08af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
