export const name="seat-thin";
export const id="dl_19df5ea259c34971217e";
export const url=new URL("../icons/seat-thin.svg?v=fe51ac6678ff51ef73e714ad4f1fef5309479487edf509addd9ad6b5b0351dc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
