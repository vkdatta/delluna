export const name="lucid_2-file-user";
export const id="dl_7a76aa61c90b46798c6b";
export const url=new URL("../icons/lucid_2-file-user.svg?v=badf9de470fe9974bfc24b0f8a350f9103f226c7fd24df33367d038ed0c72a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
