export const name="gitlab-logo-simple";
export const id="dl_69375c8b23444ff6b785";
export const url=new URL("../icons/gitlab-logo-simple.svg?v=f2bbaa6ca4b224a1162f783f7e10603192a5309469a1a23e2c08063b75b62606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
