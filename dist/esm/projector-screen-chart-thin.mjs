export const name="projector-screen-chart-thin";
export const id="dl_f090118028f64bdaaf9f";
export const url=new URL("../icons/projector-screen-chart-thin.svg?v=639a42731ee43f565ae99b990922e536713f011e043c3abeafb855770a72114a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
