export const name="hourglass-simple-high-bold";
export const id="dl_8733203c18df4397baf7";
export const url=new URL("../icons/hourglass-simple-high-bold.svg?v=c64b71bcc87cfa1f06fbe7af03116f6f3c690f2cc5db7888829f893db5ac07ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
