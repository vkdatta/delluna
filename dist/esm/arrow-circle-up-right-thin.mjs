export const name="arrow-circle-up-right-thin";
export const id="dl_8a719339b0e14e5badf6";
export const url=new URL("../icons/arrow-circle-up-right-thin.svg?v=6cb0b84be0c92246c5251b9999eec24854fd8fa7fd26737f3f81323ac07aefb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
