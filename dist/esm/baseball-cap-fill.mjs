export const name="baseball-cap-fill";
export const id="dl_c72c07b05218456db8bb";
export const url=new URL("../icons/baseball-cap-fill.svg?v=06f46aec2c4865f515bbe58f385ae2cb56f5879953da920a50dc849e46090647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
