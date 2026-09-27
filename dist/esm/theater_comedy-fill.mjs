export const name="theater_comedy-fill";
export const id="dl_2180e5d330ac5b304766";
export const url=new URL("../icons/theater_comedy-fill.svg?v=f45a6bfbeaea04cc16e50b8ac6a612f9f29e499806593ce73f19e66e1ab30c32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
