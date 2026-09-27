export const name="browser-thin";
export const id="dl_fbdbd84e1f4349b081d2";
export const url=new URL("../icons/browser-thin.svg?v=03f8ff9726781d55dbe1968f70b626a8e1d2873b29bc33ea2fd900b539ddf80d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
