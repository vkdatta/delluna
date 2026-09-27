export const name="user-sound-bold";
export const id="dl_8a568615901672134ebf";
export const url=new URL("../icons/user-sound-bold.svg?v=d796ac968484780140f317659909b792f8e40850b99f6bd78d260b1d64aa319b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
