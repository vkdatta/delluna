export const name="signal_cellular_1_bar-fill";
export const id="dl_a842f564a1c63ea8d1a6";
export const url=new URL("../icons/signal_cellular_1_bar-fill.svg?v=3578561c319a1de12baaaea463c65c406481d6c0060fd414ec7d9acec91bd434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
