export const name="stop-circle";
export const id="dl_0e0527ae180b28bd302a";
export const url=new URL("../icons/stop-circle.svg?v=eb5aebd8c78f29ac5e1cd37381a5447da4946f1583cf89768e80ea938aa6ae45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
