export const name="loyalty";
export const id="dl_1bbf7ae6ee2397224b83";
export const url=new URL("../icons/loyalty.svg?v=41162a502b100f119ad8d073f86d229966a685ce6b15122fe14f9aa8acf3f79f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
