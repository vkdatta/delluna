export const name="cigarette-slash-duotone";
export const id="dl_f552bbece34446e3ade8";
export const url=new URL("../icons/cigarette-slash-duotone.svg?v=373640d72f1ad4e0ee0c0a92239e76ee47a872de9a8b24c53e238da43bfd6aa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
