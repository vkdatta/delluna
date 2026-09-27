export const name="markdown-fill";
export const id="dl_b1c98112a58c09fb7faf";
export const url=new URL("../icons/markdown-fill.svg?v=431873c0ec70e9cf542e60ccde0b6cd21c46ecf06c1634af299bd1d2365a701e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
