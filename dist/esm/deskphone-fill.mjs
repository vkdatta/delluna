export const name="deskphone-fill";
export const id="dl_17af83386d38ec5c9b4d";
export const url=new URL("../icons/deskphone-fill.svg?v=7fd6c789f8fbc81d95575658436bd28dafa65a3a9fb7b65e04a7aeacd3d5e596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
