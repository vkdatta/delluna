export const name="signal_cellular_add-fill";
export const id="dl_65edc2f24a08bc09799e";
export const url=new URL("../icons/signal_cellular_add-fill.svg?v=ba5b3764660648eab694240ebbb9d861520e96acf4aaf261424fff3b8700ed63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
