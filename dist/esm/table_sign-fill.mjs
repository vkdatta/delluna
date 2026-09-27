export const name="table_sign-fill";
export const id="dl_3271ee74800e1edb957b";
export const url=new URL("../icons/table_sign-fill.svg?v=5dd1234d6c58f7e894f68c21f5d7f8f0eda77075fb12394500c540375a93f782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
