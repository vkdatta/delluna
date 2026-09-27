export const name="sports-fill";
export const id="dl_d75240f82389cd28c923";
export const url=new URL("../icons/sports-fill.svg?v=65e772667e202b8e70436ac0f7445f3029d74c259f62070461ba9919c6eccdc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
