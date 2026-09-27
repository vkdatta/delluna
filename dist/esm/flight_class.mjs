export const name="flight_class";
export const id="dl_e737825d7c674b182ab3";
export const url=new URL("../icons/flight_class.svg?v=91f1427dc0ee05064f01e9052f4299f4ef5a192c8ba6962120579d53cf417c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
