export const name="baseball-cap-fill";
export const id="dl_c72c07b05218456db8bb";
export const url=new URL("../icons/baseball-cap-fill.svg?v=ba9ec1e3207fb44e688a451155369d6ebc8f31800e7b70b13dad149b26edbddc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
