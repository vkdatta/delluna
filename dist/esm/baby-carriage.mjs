export const name="baby-carriage";
export const id="dl_980fa824f85145c5ac31";
export const url=new URL("../icons/baby-carriage.svg?v=41b3aa0a35144926abfdab4f1fc1eef21ca6f66a0b67f4d59e9b527e4a851f69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
