export const name="fire-simple-light";
export const id="dl_bf77436b8f444bdeb553";
export const url=new URL("../icons/fire-simple-light.svg?v=55cca0a5993a2bdc297f74d361ec6787a4bc802093ed4344e0a4b911d8f64690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
