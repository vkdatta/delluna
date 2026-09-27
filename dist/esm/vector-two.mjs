export const name="vector-two";
export const id="dl_c18c7a3b5ecdaba0d830";
export const url=new URL("../icons/vector-two.svg?v=4fb9bbba58602e9cdf923e4d0cabb1fd9f5e4fdc91b320b9a08b00b686c44ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
