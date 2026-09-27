export const name="lucid_2-dog";
export const id="dl_86933778e5c2462ebfe4";
export const url=new URL("../icons/lucid_2-dog.svg?v=7f9db56ff112b8d00da558544af7c96cf365ed0f5c656a0e094729390f54ae0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
