export const name="apple-logo-bold";
export const id="dl_4ed7ce6c14fa47c29e6e";
export const url=new URL("../icons/apple-logo-bold.svg?v=2d3a2941e4cc7b2e3a53c2872d5fe2056a3d8b6cc3efb9ab122fbca1c42e0979",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
