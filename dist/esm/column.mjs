export const name="column";
export const id="dl_5fb04a9b931e4aa49680";
export const url=new URL("../icons/column.svg?v=9cb1bca87399080759061937920f0c4eb9a47a4566806002c4714961a2bd8c82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
