export const name="lucid_2-lamp-floor";
export const id="dl_eb7983fed44e40ddb2c4";
export const url=new URL("../icons/lucid_2-lamp-floor.svg?v=5f28e3f45387f8c47e3c4b499021d5aaacc594b85ced05eb845fa424501ca263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
