export const name="warning-circle-fill";
export const id="dl_e00d9152ab7e33436648";
export const url=new URL("../icons/warning-circle-fill.svg?v=f7ded175abe634fdf3081e162fdd019aaa6e37362e441c3b8a7f48acb6c4750b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
