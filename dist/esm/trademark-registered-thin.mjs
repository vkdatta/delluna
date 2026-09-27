export const name="trademark-registered-thin";
export const id="dl_4a8c915876982cdfa035";
export const url=new URL("../icons/trademark-registered-thin.svg?v=fbbb1320a52ecee10005ea7706491efed3e9e11485ab47b24e76dcfff5b154aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
