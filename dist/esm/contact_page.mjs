export const name="contact_page";
export const id="dl_549f6f76e46540dd8d7f";
export const url=new URL("../icons/contact_page.svg?v=4130e224468fb9ccb664ac083d4e5cec17246242e82bf592a2b9c40917c5799c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
