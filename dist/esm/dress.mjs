export const name="dress";
export const id="dl_4a08524b0306442c84ba";
export const url=new URL("../icons/dress.svg?v=d11f147568c40a27ab5fc9ceca023d7fceff2d1774c3a9db75ac788ca5cf6583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
