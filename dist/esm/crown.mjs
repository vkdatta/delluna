export const name="crown";
export const id="dl_881bcbd2164d46ee96e8";
export const url=new URL("../icons/crown.svg?v=f47530eff12e37918f2169f59e6caaa3ba2280d50f1a0cbc78a485bad109eae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
