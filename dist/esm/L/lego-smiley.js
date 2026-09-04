export const name="lego-smiley";
export const id="dl_fdf9dc22fb39495480a7";
export const url=new URL("../../icons/L/lego-smiley.svg?v=23cade5aa4afc89f685a9daff1661bcdbef80ba7cde0e354860685b1c58726ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
