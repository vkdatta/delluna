export const name="projector-screen-chart-thin";
export const id="dl_f090118028f64bdaaf9f";
export const url=new URL("../icons/projector-screen-chart-thin.svg?v=e483897d555f29b7c269e076afdaa96d637de937ac4f1872e0a6d15e11624007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
