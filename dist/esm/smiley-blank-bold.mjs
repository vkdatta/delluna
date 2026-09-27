export const name="smiley-blank-bold";
export const id="dl_10a7c84e5ea18763e888";
export const url=new URL("../icons/smiley-blank-bold.svg?v=9b5fa853efc0238cd2f4e23086b57c858fd5eda2d329972662013d307e925633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
