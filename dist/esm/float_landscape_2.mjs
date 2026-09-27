export const name="float_landscape_2";
export const id="dl_6a1b9182094d21628b7e";
export const url=new URL("../icons/float_landscape_2.svg?v=99bf3d7df1d2abb7f272a50436f623b17a408b3846b5ca20e1776fff7c069f81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
