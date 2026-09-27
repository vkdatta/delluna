export const name="jar-bold";
export const id="dl_b0d4645afb5f468a9f1b";
export const url=new URL("../icons/jar-bold.svg?v=987baabf9bcba1f18d0274f4d8f3fa9837b1f4c50ad4ffdbe1f8560a7c6a7275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
