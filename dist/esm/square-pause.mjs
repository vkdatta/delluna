export const name="square-pause";
export const id="dl_5a8bc502856c4bbfb02c";
export const url=new URL("../icons/square-pause.svg?v=448ed61624c32dca506fdfc5cb814da2fd629f52f3732a8fb7fce26cf8c94cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
