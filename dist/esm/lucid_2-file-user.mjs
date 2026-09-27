export const name="lucid_2-file-user";
export const id="dl_7a76aa61c90b46798c6b";
export const url=new URL("../icons/lucid_2-file-user.svg?v=517b287346d801599bb12ce2e512243b6fe41cb11042f79c8eea21e2f8dc5e66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
