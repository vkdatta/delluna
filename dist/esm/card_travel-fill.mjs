export const name="card_travel-fill";
export const id="dl_cc922633647a8b6c7d3d";
export const url=new URL("../icons/card_travel-fill.svg?v=e703c0f36f25be57378c06fec04234eb218b4116f8acf4ca5b7e0f1e14368fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
