export const name="sensors_krx";
export const id="dl_232d621539e94adfb4c6";
export const url=new URL("../icons/sensors_krx.svg?v=bb1fc598d25d75d7b4a8c693cbea7359414b413da91c07b7d67b098da0c7b75c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
